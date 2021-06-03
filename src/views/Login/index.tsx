import * as React from 'react';
import Button from 'components/Button';
import Dialog from 'components/Dialog';

import LoginForm from './LoginForm';

import './styles.scss';

interface DialogState {
    open: boolean,
    dialogContent?: any
}

const defaultState:DialogState = {
    open: false,
    dialogContent: ''
}

const LoginPage:any = (props) => {
    const [stateDialog, setStateDialog] = React.useState<DialogState>(defaultState);
    const handleLogin = () => {
        setStateDialog({
            ...stateDialog,
            open: true,
            dialogContent: <LoginForm />
        })
    }
    const handleCloseDialog = () => {
        setStateDialog({
            ...stateDialog,
            open: false
        })
    }
    return (
        <div className='wrapper-login-page'>
          <Button onClick={handleLogin} variant='contained' color='primary'>Login</Button>
          <Dialog 
            maxWidth={'sm'}
            handleClose={handleCloseDialog}
            open={stateDialog.open} 
            dialogContent={stateDialog.dialogContent} />
        </div>
    )
}

export default LoginPage;