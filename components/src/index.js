import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (

    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          time="Today at 4:12AM"
          comment="You suck" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          time="Yesterday at 1:12PM"
          comment="Great Job" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          time="Yesterday at 8:12PM"
          comment="ROLEX WATCHES ONLY $99.99 FOR A LIMITED TIME ONLY. GO TO FAKEROLEX.NET NOW"/>
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
