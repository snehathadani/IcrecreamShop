import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../Containers/HOC/Aux';
import BackDrop from '../UI/BackDrop';

 const Modal=(props)=> {
     return(
        <Aux>
            <BackDrop show= {props.show}
                       modalClose={props.modalClose} />
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    )
    
            }

export default Modal;