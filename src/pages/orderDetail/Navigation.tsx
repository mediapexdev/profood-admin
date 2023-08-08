
export const NavigationTab: React.FC = () => {
    return (
        <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-lg-n2 me-auto">
            <li className="nav-item">
                <a className="nav-link text-active-primary pb-4 active">Détails </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-active-primary pb-4">Order History</a>
            </li>
        </ul>
    )
}