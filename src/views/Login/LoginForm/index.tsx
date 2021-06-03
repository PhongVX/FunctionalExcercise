import * as React from 'react';
import TextField from '@material-ui/core/TextField';

import Button from 'components/Button';

import './styles.scss';

const LoginForm:any = (props) => {
    const [userName, setUserName] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = () => {
        if (userName === '' || password === '') {
            alert('UserName and password required')
            return
        }
        if (userName === 'admin' && password === 'admin') {
            alert('Login successfully');
        }

    }
    return (
       <>
         <TextField onChange={handleUserNameChange} className="full-width"  label="User Name" /><br/><br/>
         <TextField type="password" onChange={handlePasswordChange} className="full-width"  label="Password" /> <br/><br/>
         <Button onClick={handleSubmit} className="full-width"  variant="contained" color="primary">Login</Button>
       </>
    )
}
export default LoginForm;