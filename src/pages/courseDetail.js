import React, { Component } from 'react';
import CourseDetail from '../components/CourseDetail';
import withLayout from '../lib/withLayout';

class Detail extends Component {
  render() {
    const { user, history, match } = this.props;
    const { id } = match.params;
    return (
      <div>
        <CourseDetail id={id} history={history} user={user} />
      </div>
    );
  }
}

export default withLayout(Detail);
