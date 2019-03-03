import React, { Component } from 'react';
import Registration from '../components/Registration';
import Modal from '../components/modal/index';
import VerifyModal from '../components/modal/VerifyModal';
import InformatixModal from '../components/modal/InformatixModal';

class RegisterPage extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.openRegister ?
                    <Registration fnRegister={this.props.fnRegister} /> : ''}
                {this.props.registered && !this.props.otpVerified &&
                    <Modal >
                        <VerifyModal {...this.props} />
                    </Modal>}
                {this.props.otpVerified &&
                    <Modal>
                        <InformatixModal />
                    </Modal>
                }
            </React.Fragment>
        );
    }
}

export default RegisterPage;