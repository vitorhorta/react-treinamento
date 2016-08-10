/**
 * Created by smart_i9 on 10/08/2016.
 */
import React, {Component} from 'react';

/**
 * Recebe um texto e um número máximo de letras. Se o tamanho do texto exceder o máximo de letras, exibe um alerta mostrando qual parte do texto excedeu o limite.
 */
class OverflowAlert extends Component {
    constructor(props){
        super(props);
    }

    render() {
        if (this.props.texto.length > this.props.maxLetras) {
            var beforeOverflowText = this.props.texto.substring(this.props.maxLetras - 10, this.props.maxLetras);
            var overflowText = this.props.texto.substring(this.props.maxLetras);

            return (
                <div className="alert alert-warning">
                    <strong>Oops! Too Long:</strong>
                    &nbsp;...{beforeOverflowText}
                    <strong className="bg-danger">{overflowText}</strong>
                </div>
            );
        } else {
            return null;
        }
    }
}

OverflowAlert.defaultProps = { maxLetras: 140, texto: "" };

export default OverflowAlert;
