export function parseNum(num) {
    let newValue = parseFloat(num);
    // console.log(num);
    if (isNaN(newValue)) newValue = 0;

    return newValue;
}
export function formatAmount(amount) {
    if (isNaN(amount)) {
        amount = 0
    }
    else {
        amount = parseFloat(amount)
        if (Math.floor(amount) !== amount) {
            amount = amount.toFixed(2);
        }
    }
    return amount;
}

export function calcFinalTotals(designationArray, setValue) {
    let giftTotal = 0;
    let nonGiftTotal = 0;

    for (var d in designationArray) {
        giftTotal += parseNum(designationArray[d].designationGiftAmount);
        nonGiftTotal += parseNum(designationArray[d].designationNonGiftAmount);
    }
    setValue("giftTotal", formatAmount(giftTotal));
    setValue("nonGiftTotal", formatAmount(nonGiftTotal));
    setValue("overallTotal", formatAmount(giftTotal + nonGiftTotal));
}

export function newDesignation() {
    return {
        newDesignationRequestedChecked: false, // DesignationInformaiton.js
        nonGiftPortionChecked: false, // DesignationInformaiton.js
        departmentContactEmail: "", // DesignationInformaiton.js
        departmentContact: "", // DesignationInformaiton.js
        tedDesignationId: "", // DesignationInformaiton.js
        tedDesignationTitle: "", // DesignationInformaiton.js
        designationGiftAmount: "", // DesignationInformaiton.js
        designationNonGiftAmount: "", // DesignationInformaiton.js
        designationTotalAmount: 0, // DesignationInformaiton.js
        pledgeRevenueId: "", // DesignationInformaiton.js
        designationAdditionalComments: "", // DesignationInformaiton.js

        associatedOpportunityChecked: false, // GiftAssociatedOpportunity
        tedHouseholdId: "", // GiftAssociatedOpportunity
        tedHouseholdName: "", // GiftAssociatedOpportunity
        tedPlanName: "", // GiftAssociatedOpportunity
        tedOpportunityAmount: "", // GiftAssociatedOpportunity
        actualAskDate: "", // GiftAssociatedOpportunity
        primaryPlanManager: "", // GiftAssociatedOpportunity
    };
}
