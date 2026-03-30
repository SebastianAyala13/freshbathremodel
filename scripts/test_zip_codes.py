#!/usr/bin/env python3
"""Test the generated authorizedZipCodes.ts file."""

import re
from pathlib import Path

# Read the generated file
ts_file = Path('src/lib/authorizedZipCodes.ts')
content = ts_file.read_text()

# Extract zip codes using regex
zips = re.findall(r"'(\d{5})'", content)

print(f"✓ Generated file has {len(zips)} total zip codes")
print(f"✓ First 10 zips: {zips[:10]}")
print(f"✓ Sample validation:")
print(f"   - '01005' in zips: {'01005' in zips}")
print(f"   - '85001' in zips: {'85001' in zips}")
print(f"   - '06605' in zips: {'06605' in zips}")
print(f"   - '99999' in zips (should be False): {'99999' in zips}")
print(f"   - '12345' in zips (should be False): {'12345' in zips}")

# Check that validation function exists
if 'export const isValidZipCode' in content:
    print("✓ isValidZipCode validation function found")
else:
    print("✗ isValidZipCode validation function NOT found")

if 'export const AUTHORIZED_ZIP_CODES = new Set' in content:
    print("✓ AUTHORIZED_ZIP_CODES Set found")
else:
    print("✗ AUTHORIZED_ZIP_CODES Set NOT found")
