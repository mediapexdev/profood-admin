import "./header.css";
import { toAbsolutePublicUrl } from "../../helpers/AssetHelper";
import { OffCanvas } from "./Offcanvas";

export const Header: React.FC = () => {
    return (
        <header
            className="sticky-top shadow"
        >
            <nav className="navbar bg-body-tertiary">    
                            
                <div className="container-fluid justify-content-start">
                <OffCanvas/>
                    <div className="navbar-brand"><img
                        className="logo-img d-block img-fluid"
                        src={toAbsolutePublicUrl('/media/images/logos/profood-new.png')}
                        alt="logo"
                    /></div>

                </div>
            </nav>
        </header>
    )
}