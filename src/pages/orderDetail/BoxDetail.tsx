import { toAbsolutePublicUrl } from "../../helpers/AssetHelper";

export const BoxDetail:React.FC=()=>{
    return(
        <table style={{marginLeft:150}}>
            <tbody>
        <tr>
            <td><img src={toAbsolutePublicUrl('/media/images/illustrations/slices/')} /></td>
            <td> cotelettes</td>
            <td> 6</td>
        </tr>
        </tbody>
        </table>
    );
}