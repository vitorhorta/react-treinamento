import React, {Component} from 'react';
import UserList from '../containers/UserList';
import UserDetail from '../containers/UserDetail';
/**
 * Recebe um texto e um número máximo de letras. Se o tamanho do texto exceder o máximo de letras, exibe um alerta mostrando qual parte do texto excedeu o limite.
 */
class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Username List:</h2>
                <UserList />
                <hr/>
                <h2>User Details</h2>
                <UserDetail />
            </div>
        )
    }
}



export default Layout;
