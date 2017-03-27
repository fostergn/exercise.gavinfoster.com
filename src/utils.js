export const alphabetizeArray = (contacts) => {
  const alphabetizedSubArrays = {};

  // sort alphabetically
  const alphabeticalContacts =  contacts.sort((a, b) => a.firstName.toLowerCase() > b.firstName.toLowerCase());

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