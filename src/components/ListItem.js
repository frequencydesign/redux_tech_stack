import React, {Component} from "React";
import {Text, TouchableWithoutFeedback, View, LayoutAnimation} from "react-native";
import {connect} from "react-redux";
import {CardSection} from "./common";
import * as actions from "../actions";

class ListItem extends Component {

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

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
		console.log("running renderDescription()");
		const {descriptionStyle} = styles;
		const {library, expanded} = this.props;
		if (expanded) {
			console.log("running renderDescription() if expanded is true");
			return (
				<CardSection>
					<Text style={descriptionStyle}>{library.description}</Text>
				</CardSection>
			);
		}
	}

	render() {
console.log("running render()");
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
	},
	descriptionStyle : {
		paddingTop: 10,
		paddingRight: 20,
		paddingBottom: 10,
		paddingLeft: 20,
		flex: 1
	}
};

const mapStateToProps = (state, ownProps) => {
	console.log("running mapStateToProps() and setting the expanded boolean and returning it");
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return {expanded};
};

/*
const mapStateToProps = state => {
	return {selectedLibraryId: state.selectedLibraryId};
};
*/


export default connect(mapStateToProps,actions)(ListItem);