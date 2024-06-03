import {Home} from "lucide-react"
import {Info} from "lucide-react"
import {CircleUserRound} from "lucide-react"
import {Baby} from "lucide-react"

export default function Header() {
    return (
        <header>
            <h1><Baby className="icon"/> Baby - Baby Gumuyss</h1>
            <ul>
                <li><Home />Home</li>
                <li><Info />About</li>
                <li><CircleUserRound />Profile</li>
            </ul>
        </header>
    );
}
