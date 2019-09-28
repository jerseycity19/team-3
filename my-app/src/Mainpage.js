import React, { Component } from 'react';

class Mainpage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Many scholars around the world face the serious issue of self-censorship, in which they’re unable to freely express thoughts and ideas for fear of persecution. We’re asking for your help in combating this extremely detrimental effect by simply filling out our survey. You’ll remain completely anonymous, and this data will help us fight against self-censorship worldwide.
								I understand and agree that the data I submit will be used anonymously in reports, studies, and advocacy about self-censorship.
                <button href="/form">I understand and agree</button>
            </div>
        );
    }

}

export default Mainpage;
