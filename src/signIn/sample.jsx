import React from "react";

export class HeaderNew extends React.Component{
    render(){
        return(<div>
            <h3> This is heading with name </h3>
        </div>)
    }
}

export class SignInNew extends React.Component{
    render(){
        return(
            <div>
                <button>Go</button>
                <HeaderNew/>
                </div>
        )
    }
}

// export var SignInNew = function B() {
//     return(
//         <div>
//             <button>Go</button>
//             <HeaderNew/>
//         </div>
//
//
//     )
// };

export default SignInNew
