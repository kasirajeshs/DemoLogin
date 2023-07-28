import { connect } from "react-redux";
import { AppBaseApp } from "../baseComponent";
import { AppConstants } from "../../constants/appConstants";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { actionHomeGetPostList } from "../../app_redux/actions";

class HomeScreen extends AppBaseApp {

  componentDidMount() {
    this.reloadData();
  }

  /** to reload the list data **/
  reloadData = () => {
    try {
      this.props.actionHomeGetPostList();
    } catch (ex) {
      console.error("reloadData : error : ", ex);
    }
  };

  /** to refresh the list on pull **/
  handleRefresh = () => {
    try {
      this.reloadData();
    } catch (ex) {
      console.log("handleRefresh : error : ", ex);
    }
  };

  /** to render header **/
  renderHeader = () => {
    return (
      <View style={homeStyle.headerContainer}>
        <View style={homeStyle.headerTextContainer}>
          <Text style={homeStyle.headerTextHello}>
            {"Hello, "}
          </Text>
          <Text style={homeStyle.headerText}>
            {AppConstants.USER_NAME}
          </Text>
        </View>
      </View>
    );
  };

  /** to render single post list item **/
  renderPost = (post) => {

    return (
      <TouchableOpacity
        style={homeStyle.postContainer}
        onPress={() => this.props.navigation.navigate(AppConstants.AppPaths.DETAILS, { post: post })}
      >
        <View style={homeStyle.topContentContainer}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={homeStyle.postTitle}>
            {post.item.title}
          </Text>
        </View>

        <View style={homeStyle.bodyContainer}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={homeStyle.postBody}>
            {post.item.body}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderList = () => {
    const { postList, isLoading } = this.props.ReducerHome;

    return (
      <FlatList
        data={postList}
        renderItem={(post) => this.renderPost(post)}
        keyExtractor={(item) => item.id.toString()}
        refreshing={isLoading}
        onRefresh={this.handleRefresh}
      />
    );
  };

  renderContent = () => {
    return (
      <View style={StyleSheet.contentContainer}>
        {this.renderHeader()}
        {this.renderList()}
      </View>
    );
  };
}

export const homeStyle = StyleSheet.create({
  headerContainer: {
    height: 84,
    width: "100%",
    marginBottom: 12,
  },
  headerTextContainer: {
    height: "100%",
    width: "75%",
    paddingLeft: 18,
    paddingTop: 18,
  },
  headerText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 26,
    lineHeight: 42,
    color: "#3570EC",
  },
  headerTextHello: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 22,
    color: "#8FAEF1",
  },
  postContainer: {
    padding: 10,
    borderRadius: 8,
    overflow: "hidden",
    minHeight: 60,
    marginBottom: 8,
    width: "100%",
    height: "auto",
  },
  postTitle: {
    color: "#505664",
    fontSize: 18,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    width: "100%",
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 0.3,
    lineHeight: 24,
  },
  postBody: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 20,
    width: "100%",
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
  },
  bodyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
  },
  topContentContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

});

const mapStateToProps = ({ ReducerHome }) => {
  return {
    ReducerHome,
  };
};

export default connect(mapStateToProps, {
  actionHomeGetPostList,
})(
  HomeScreen,
);
