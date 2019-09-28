import React, { Component, Suspense } from 'react';
import { withTranslation } from 'react-i18next';

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { t, i18n } = this.props;
        return (
            <form>
                <label>
                    User Identification:
          <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Name:
          <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Name:
          <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Name:
          <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Name:
          <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

}

export default Form;