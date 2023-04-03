import React from 'react'

export default function Alert(props) {
    const capitle=(word)=>{
        const small= word.toLowerCase();
        return small.charAt(0).toUpperCase() + small.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitle(props.alert.type)}</strong>:{props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            
        </div>
    )
}
