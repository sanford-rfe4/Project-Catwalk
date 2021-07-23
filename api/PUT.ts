import axios from "axios";
import AJAX from "../client/src/config";

const header = {
  Authorization: `${AJAX.API_KEY}`,
};

const PUT = {
  reviews: {
    // mark a review as helpful
    helpful: function (review_id: number) {
      axios
        .put(
          AJAX.URL + `/reviews/${review_id}/helpful`,
          {},
          { headers: header }
        )
        .then((response) => {
          console.log("howdy friends");
        })
        .catch((err) => {
          console.log("bye friends");
        });
    },
    // report question as inappropriate
    report: function (review_id: number) {
      axios
        .put(
          AJAX.URL + `/reviews/${review_id}/report`,
          {},
          {
            headers: header,
          }
        )
        .then((response) => {
          console.log("howdy friends");
        })
        .catch((err) => {
          console.log("bye friends");
        });
    },
  },
  questions: {
    // mark a question as helpful
    helpful: function (question_id: number) {
      axios
        .put(
          AJAX.URL + `/qa/questions/${question_id}/helpful`,
          {},
          {
            headers: header,
          }
        )
        .then((response) => {
          console.log("howdy friends");
        })
        .catch((err) => {
          console.log("bye friends");
        });
    },
    // report a question as inappropriate
    report: function (question_id: number) {
      axios
        .put(
          AJAX.URL + `/qa/questions/${question_id}/report`,
          {},
          {
            headers: header,
          }
        )
        .then((response) => {
          console.log("howdy friends");
        })
        .catch((err) => {
          console.log("bye friends");
        });
    },
  },
  answers: {
    // mark an answer as helpful
    helpful: function (answer_id: number) {
      axios
        .put(
          AJAX.URL + `/qa/answers/${answer_id}/helpful`,
          {},
          {
            headers: header,
          }
        )
        .then((response) => {
          console.log("howdy friends");
        })
        .catch((err) => {
          console.log("bye friends");
        });
    },
    // report an answer as inappropriate
    report: function (answer_id: number) {
      axios.put(
        AJAX.URL + `/qa/answers/${answer_id}/report`,
        {},
        {
          headers: header,
        }
      )
      .then((response) => {
        console.log('howdy friends');
      })
      .catch((err) => {
        console.log('bye friends');
      })
    },
  },
};

export default PUT;
