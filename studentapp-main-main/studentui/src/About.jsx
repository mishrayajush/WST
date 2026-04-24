import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h3>This is about page</h3>
            <Link to="/">go to dashboard</Link>
        </div>
    );
};

export default About;
