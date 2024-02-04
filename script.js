function formatLicenseKey() {
    const inputKey = document.getElementById('licenseKey').value;
    const groupSize = parseInt(document.getElementById('groupSize').value, 10);
  
    // Your logic for formatting the license key goes here
    const formattedKey = formatKey(inputKey, groupSize);
  
    // Display the formatted key
    document.getElementById('output').innerText = `Formatted License Key: ${formattedKey}`;
  }
  
  function formatKey(s, k) {
    // Implement your logic for formatting the license key here
    // This could include removing dashes, converting to uppercase, and inserting new dashes
  
    // Example logic (this may not cover all edge cases)
    const keyWithoutDashes = s.replace(/-/g, '').toUpperCase();
    const firstGroupSize = keyWithoutDashes.length % k || k;
    const formattedKey = [keyWithoutDashes.slice(0, firstGroupSize)];
  
    for (let i = firstGroupSize; i < keyWithoutDashes.length; i += k) {
      formattedKey.push(keyWithoutDashes.slice(i, i + k));
    }
  
    return formattedKey.join('-');
  }
  