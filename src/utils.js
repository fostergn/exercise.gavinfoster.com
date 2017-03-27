export const alphabetizeArray = (contacts) => {
  const alphabetizedSubArrays = {};

  // sort alphabetically
  const alphabeticalContacts =  contacts.sort((a, b) => {
    if (a.firstName.toLowerCase() < b.firstName.toLowerCase()){
      return -1
    } else { return 1 }
  })

  // loop through contacts and create sub array for each letter in the alphabet
  for (let i = 0; i < alphabeticalContacts.length; i++){
    let contact = alphabeticalContacts[i];
    let firstLetter = contact.firstName[0];
    
    // does letter in list already exist for current contact
    if (!alphabetizedSubArrays.hasOwnProperty(alphabeticalContacts[i].firstName[0])){
      alphabetizedSubArrays[firstLetter] = [];
    }
    alphabetizedSubArrays[firstLetter].push(contact);
  }
  
  return alphabetizedSubArrays
}

export const intToPhone = (int) => {
  return [int.slice(0, 0), '(', int.slice(0, 3), ') ', int.slice(3, 6), '-', int.slice(6)].join('');
}