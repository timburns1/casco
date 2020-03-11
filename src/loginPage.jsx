import React from 'react';
import { observer } from 'mobx-react';
import UserStore from './stores/userStore';
import LoginFrom from './loginForm';
import SubmitButton from './components/SubmitButton';
import './loginPage.css'


class LoginPage extends React.Component {


    async  componentDidMount() {

        try {

            let res = await fetch('/isLoggedIn', {
                method: 'post',
                headers: {
                    'Accept': 'application/json ',
                    'Content-Type': 'application/json'
                }
            });

            let result = await res.json();

            if (result && result.success) {
                UserStore.loading = false;
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }

            else {
                UserStore.loading = false;
                UserStore.isLoggedIn = false;

            }

        }

        catch (e) {

            UserStore.loading = false;
            UserStore.isLoggedIn = false;


        }
    }

    async doLogout() {
        try {

            let res = await fetch('/logout', {
                method: 'post',
                headers: {
                    'Accept': 'application/json ',
                    'Content-Type': 'application/json'
                }
            });

            let result = await res.json();

            if (result && result.success) {
                UserStore.isLoggedIn = false;
                UserStore.username = '';


            }


        }

        catch (e) {

            console.log(e)


        }
    }




    render() {

        if (UserStore.loading) {
            return (
                <div className="log">
                    <div className="load">
                        Loading, please wait..
                    </div>
                </div>
            )
        }

        else {
            if (UserStore.isLoggedIn) {
                return (
                    <div className="log">
                        <div className="load">
                            Welcome {UserStore.username}

                            <SubmitButton
                                text={'Log Out'}
                                disabled={false}
                                onClick={() => this.doLogout()}
                            />


                        </div>
                    </div>
                )

            }
        }

        return (
            <div className="log">
                <div className="load">
                    <SubmitButton
                        text={'Log Out'}
                        disabled={false}
                        onClick={() => this.doLogout()}
                    />
                    <LoginFrom />
                </div>
            </div>
        )
    }
}

export default observer(LoginPage);
