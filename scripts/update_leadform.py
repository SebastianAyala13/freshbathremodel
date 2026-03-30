#!/usr/bin/env python3
"""Update LeadForm.jsx to use the generated zip code utility."""

import re
from pathlib import Path

def update_leadform_jsx():
    """Update LeadForm.jsx to use imported AUTHORIZED_ZIP_CODES."""
    
    leadform_path = Path('src/components/LeadForm.jsx')
    content = leadform_path.read_text()
    
    # 1. Add import for AUTHORIZED_ZIP_CODES after useRouter import
    if "import { AUTHORIZED_ZIP_CODES }" not in content:
        content = content.replace(
            "import { useRouter } from 'next/navigation'",
            "import { useRouter } from 'next/navigation'\nimport { AUTHORIZED_ZIP_CODES } from '../lib/authorizedZipCodes'"
        )
        print("✓ Added import for AUTHORIZED_ZIP_CODES")
    
    # 2. Remove the large baseAuthorizedZipCodes array definition
    # Find from comment to the closing bracket of the array
    base_pattern = r"// Lista base de zipcodes autorizados.*?\n\s{0,}const baseAuthorizedZipCodes = \[[\s\S]*?\n  \]\n"
    if re.search(base_pattern, content):
        content = re.sub(base_pattern, "", content)
        print("✓ Removed baseAuthorizedZipCodes array")
    
    # 3. Remove additionalZipCodesRaw and related setup code
    # Find from start of additionalZipCodesRaw through authorizedZipCodesSet
    additional_pattern = r"// Nueva lista suministrada.*?\n\s{0,}const additionalZipCodesRaw = `[\s\S]*?`\.trim\(\)\n\n(const normalizeZipForSet.*?\n\n){0,1}(const additionalZipCodes.*?\n\n){0,1}(const authorizedZipCodesSet.*?\n\n){0,1}"
    if re.search(additional_pattern, content):
        content = re.sub(additional_pattern, "", content)
        print("✓ Removed additionalZipCodesRaw and related setup")
    
    # 4. Update validateZipCode function to use AUTHORIZED_ZIP_CODES
    # Find the line: const isValid = hasEnoughDigits && authorizedZipCodesSet.has(normalizedZip)
    old_validation = "const isValid = hasEnoughDigits && authorizedZipCodesSet.has(normalizedZip)"
    new_validation = "const isValid = hasEnoughDigits && AUTHORIZED_ZIP_CODES.has(normalizedZip)"
    
    if old_validation in content:
        content = content.replace(old_validation, new_validation)
        print("✓ Updated validateZipCode to use AUTHORIZED_ZIP_CODES")
    else:
        print("⚠ Could not find validateZipCode to update - may already be updated")
    
    # 5. Write back the updated content
    leadform_path.write_text(content)
    print(f"\n✅ Successfully updated {leadform_path}")

if __name__ == '__main__':
    update_leadform_jsx()
