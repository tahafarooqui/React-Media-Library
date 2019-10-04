import React, {ReactNode} from "react";
import {FileLibraryListItem, FileLibraryProps} from "../../types";
import Col from "react-bootstrap/Col";
import FileLibraryCard from "./FileLibraryCard";
import Row from "react-bootstrap/Row";

const FileLibrary: React.FC<FileLibraryProps> = (props: FileLibraryProps): JSX.Element => {
	function renderList(): ReactNode[] {
		if (!props.fileLibraryList) return [];

		return props.fileLibraryList.map((element: FileLibraryListItem, index: number) => {
			return (<Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
				<FileLibraryCard {...element} />
			</Col>);
		});
	}

	return (
		<React.Fragment>
			<Row className="py-3">
				{renderList()}
			</Row>
		</React.Fragment>
	);
};

export default FileLibrary;