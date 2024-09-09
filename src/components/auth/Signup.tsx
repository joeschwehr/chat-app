import { Link } from "@mui/material";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";

const Signup = () => {
    return <Auth submitLabel="Sign Up" onSubmit={async () => { }}>
        <Link href="/login" style={{ alignSelf: "center" }}>
            <MUILink >
                Login
            </MUILink>
        </Link>
    </Auth>;
}

export default Signup;  