const PrintOneApplication = ({ oneApplication, index, formValues }) => {
    return (
        <>
            <div className="col">
                Is Donor different than Donor above?{" "}
                <span className="normal">
                    {oneApplication.isApplicationDonorDifferent}
                </span>
            </div>
            {oneApplication.isApplicationDonorDifferent === "Yes" ? (
                <div key={"application" + index}>
                    <div className="resultItems row">
                        <div className="col">
                            Last/Organization Name:{" "}
                            <span className="normal">
                                {oneApplication.dLastOrgName}
                            </span>
                        </div>
                        <div className="col">
                            First Name:
                            <span className="normal">
                                {oneApplication.dFirstName}
                            </span>
                        </div>
                        <div className="col">
                            Middle Name:
                            <span className="normal">
                                {oneApplication.dMiddleName}
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div className="resultItems row">
                <div className="col">
                    Date:{" "}
                    <span className="normal">
                        {oneApplication.applicationDate}
                    </span>
                </div>
                <div className="col">
                    Plan Gift Type:
                    <span className="normal">
                        {oneApplication.planGiftType}
                    </span>
                </div>
                <div className="col">
                    Plan Gift Amount:
                    <span className="normal">
                        {oneApplication.planGiftAmount}
                    </span>
                </div>
            </div>
        </>
    );
};
export default PrintOneApplication;
