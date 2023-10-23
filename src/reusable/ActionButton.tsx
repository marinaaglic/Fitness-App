import AnchorLink from "react-anchor-link-smooth-scroll"
import { ActionButtonProps, SelectedPage} from "../lib/types/types"

const ActionButton = ({children, setSelectedPage}: ActionButtonProps) => {
  return (
    <AnchorLink 
    className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href={`${SelectedPage.ContactUs}`}>
        {children}
    </AnchorLink>
  )
}

export default ActionButton