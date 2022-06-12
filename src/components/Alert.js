import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div className="container pt-5 px-5">
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.type.toUpperCase()}</strong> :
          {props.alert.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
}
