import { connect } from "react-redux";
import { AppBaseApp } from "../baseComponent";
import { StyleSheet, View, Text } from "react-native";

class DetailsScreen extends AppBaseApp {

  renderDetails = () => {

    let post = null;

    if (this.props.route && this.props.route.params && this.props.route.params.post) {
      post = this.props.route.params.post;
    }

    return (post && (
        <>
          <View style={detailsStyle.textContainer}>
            <Text style={detailsStyle.postTitle}>
              {post.item.title}
            </Text>
          </View>
          <View style={detailsStyle.textContainer}>
            <Text style={detailsStyle.postBody}>
              {post.item.body}
            </Text>
          </View>
        </>
      )
    );
  };


  renderContent = () => {
    return (
      <View style={StyleSheet.contentContainer}>
        {this.renderDetails()}
      </View>
    );
  };
}

export const detailsStyle = StyleSheet.create({
  postTitle: {
    color: "#505664",
    fontSize: 18,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    width: "100%",
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 0.3,
    lineHeight: 24,
  },
  postBody: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 24,
    width: "100%",
    padding: 16,
  },
  textContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

});

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(
  DetailsScreen,
);
