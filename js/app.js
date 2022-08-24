function getInputValue(inputId) {
    return parseInt(document.getElementById(inputId).value);
  }
  
  function insertText(inputId, data) {
    document.getElementById(inputId).innerText = data;
  }
  
  function getTextValue(textId) {
    return document.getElementById(textId).innerText;
  }
  
  document
    .getElementById('calculate-button')
    .addEventListener('click', function () {
      // retrieve the values from input field
      const totalIncome = getInputValue('total-income');
  
      const foodCost = getInputValue('food-cost');
      const rentCost = getInputValue('rent-home');
      const clothesCost = getInputValue('clothes-cost');
  
      const totalExpense = foodCost + rentCost + clothesCost;
  
      insertText('total-expenses', totalExpense);
      insertText('rest-amount', totalIncome - totalExpense);
    });
  
  document.getElementById('saving-button').addEventListener('click', function () {
    const savingPercentage = getInputValue('saving-field');
    const totalIncome = getInputValue('total-income');
  
    const savingAmount = (totalIncome * savingPercentage) / 100;
    const restAmount = getTextValue('rest-amount');
  
    insertText('saving-amount', savingAmount);
  
    insertText('remining-balance', restAmount - savingAmount);
  });
  