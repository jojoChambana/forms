import { formatAmount } from "../HelperFunctions";

const PrintOneOpportunity = ({ oneDesignation, index }) => {
    return (
        <div className="rightOffset">
            <div className="resultItems row">
                <div className="d-flex justify-content-end">
                    <div className="d-flex justify-content-end">
                        <span className="normal longName">
                            <strong>Opportunity Details</strong>
                        </span>
                    </div>
                </div>
            </div>
            <div className="resultItems row">
                <div className="d-print-table-row">
                    <div className="col" style={{ padding: "0 1em" }}>
                        <div className="d-print-table-row">
                            <div className="rightLabel">TED Household ID:</div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {oneDesignation.tedHouseholdId}
                                </span>
                            </div>
                        </div>

                        <div className="d-print-table-row">
                            <div className="rightLabel">
                                TED Household Name:
                            </div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {oneDesignation.tedHouseholdName}
                                </span>
                            </div>
                        </div>

                        <div className="d-print-table-row">
                            <div className="rightLabel">Plan Name:</div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {oneDesignation.tedPlanName}
                                </span>
                            </div>
                        </div>

                        <div className="d-print-table-row">
                            <div className="rightLabel">
                                Opportunity Amount:
                            </div>
                            <div className="d-print-table-cell">
                                <span className="normal">
                                    {formatAmount(
                                        oneDesignation.tedOpportunityAmount
                                    )}
                                </span>
                            </div>
                        </div>

                        <div className="d-print-table-row">
                            <div className="rightLabel">Actual Ask Date:</div>
                            <div className="d-print-table-cell">
                                <span className="normal longName">
                                    {oneDesignation.actualAskDate}
                                </span>
                            </div>
                        </div>

                        <div className="d-print-table-row">
                            <div className="rightLabel">
                                Primary Plan Manager:
                            </div>
                            <div className="d-print-table-cell">
                                <span className="normal longName">
                                    {oneDesignation.primaryPlanManager}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PrintOneOpportunity;
