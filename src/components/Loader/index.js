import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components'

const CircularIndeterminate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center
`

export default function Loader() {
    return (
        <CircularIndeterminate>
            <CircularProgress />
        </CircularIndeterminate>
    );
}
