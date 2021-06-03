import * as React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {
    IconButton,
    Dialog as MDialog,
    DialogContent,
    DialogContentText,
    DialogProps
} from '@material-ui/core';

import './styles.scss';

interface CustomDialogProps extends DialogProps {
    handleClose?: (e: any) => void,
    dialogContent?: any,
    open: boolean
}

const Dialog: React.FC<CustomDialogProps> = (props) => {
    const { children, open, fullWidth, dialogContent, handleClose, ...restProps } = props;
    return (
        <MDialog
            fullWidth={fullWidth || true}
            open={open}
            onClose={handleClose}
            {...restProps}
        >
            <div>
                <IconButton className='button-close' onClick={handleClose}  component="span">
                    <CloseIcon />
                </IconButton>
            </div>
            {
                dialogContent ? (
                    <DialogContent>
                        <DialogContentText >
                            {dialogContent}
                        </DialogContentText>
                    </DialogContent>
                ) : null
            }

        </MDialog>
    )
}

export default Dialog;