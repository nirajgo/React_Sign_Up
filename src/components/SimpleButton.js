import React from 'react'
import { Button } from 'react-bootstrap'

function SimpleButton() {
    return (
        <div>
            <Button
                as="input"
                type="submit"
                value="Read More"
                variant="primary"
                size="sm"
            />
        </div>
    )
}

export default SimpleButton
