import React, {Component} from "React";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import {connect} from "react-redux";
import {CardSection} from "./common";
import * as actions from "../actions";

class ListItem extends Component {

/*
	renderDescription() {
		const {library, selectedLibraryId} = this.props;
		if (library.id === selectedLibraryId) {
			return (
				<Text>{library.description}</Text>
			);
		}
	}
*/

	renderDescription() {
		const {library, expanded} = this.props;
		if (expanded) {
			return (
				<Text>{library.description}</Text>
			);
		}
	}

	render() {

		const {titleStyle} = styles;
		const {id, title} = this.props.library;

		return (
			<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}

}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return {expanded};
};

/*
const mapStateToProps = state => {
	return {selectedLibraryId: state.selectedLibraryId};
};
*/

export default connect(mapStateToProps,actions)(ListItem);