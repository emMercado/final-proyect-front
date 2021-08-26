import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <div class="container fixed">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active ml-10">
                            <Link to='/' class="text-decoration-none text-white">
                                Home
                            </Link>
                        </li>
                        <li class="nav-item active ml-10">
                            <Link to='/places' class="text-decoration-none text-white" >
                                Places
                            </Link>
                        </li>
                    </ul >
                </div>
            </nav>
        </div >
    )
}