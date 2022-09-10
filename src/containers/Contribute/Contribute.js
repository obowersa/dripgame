import '../../components/Upload/UploadFile';
import UploadFile from '../../components/Upload/UploadFile';
import Auth from '../../components/Auth/Auth';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';

export default function Contribute(){
   const { error, user, isAuthenicated, isLoading } = useAuth0();
    let { authError, setErrorState } = useState(error);
    let { displayedError, setDisplayedError } = useState(false);
 
    if (!displayedError && authError) { // If error hasn't been displayed
        setTimeout(function(){
            setErrorState(false);
            setDisplayedError(true);
        }.bind(this), 10000);// wait 10 seconds to do this

        return (
            <div>
                <p>
                ERROR! {error.message}
                </p>
            </div>
        );        
    }
    else if (isLoading) {
        return (
            <div>
                Loading....
            </div>
        )
    }

    if (user) {
        console.log(JSON.stringify(user));
        console.log(user.nickname);
    }
    console.log(isAuthenicated);

    return (
    isAuthenicated || user ? ( <UploadFile username={user.nickname} userpic={user.picture} email={user.email} emailVerified={user.email_verified}></UploadFile> ) :  
        (
        <div className="contribute">
            <Auth></Auth>
        </div>
        )
    );
}