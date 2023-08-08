import { useState } from "react";
import { toAbsolutePublicUrl } from "../../helpers/AssetHelper";
import { BoxDetail } from "./BoxDetail";


export const BoxList: React.FC = () => {
    const [showSlices,setShowSlices]=useState(false);
    return (
        <>
        <table>
            <tbody>
        <tr>
            <td><span onClick={()=>setShowSlices(!showSlices)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-plus-fill" viewBox="0 0 16 16">
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
            </svg></span></td>
            <td><img width={150} height={150} src={toAbsolutePublicUrl('/media/images/illustrations/boxes/' + 1 + '.jpg')} /></td>
            <td className="ps-3"> <div className="row">Box Xeweul</div> <div className="row">120.000 f cfa</div> </td>
        </tr>
        </tbody>
        </table>
        {showSlices && <BoxDetail/>}
        </>
    );
}