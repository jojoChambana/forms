import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { Row } from 'react-bootstrap'

import NestedTedOrgDonorInput from '../components/TedOrgDonor'

export default function DonorInformation(props) {
    const [visible, setVisible] = useState(false);

    const [checked, setChecked] = useState(false);
    return (
        <>
            <Typography variant="h5" component="h3">
                Donor Information
            </Typography>
            <Row className="mt-4">
                <NestedTedOrgDonorInput />
            </Row>
        </>
    )
}
