import { Input, InputGroup } from "@chakra-ui/react";
import { useRef, type FC } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
	onSearch: (searchText: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
	const searchInputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (searchInputRef.current) {
			const searchText = searchInputRef.current.value.trim();
			onSearch(searchText);
		}
	};

	return (
		<form style={{ width: "100%" }} onSubmit={handleSubmit}>
			<InputGroup startElement={<BsSearch />}>
				<Input ref={searchInputRef} placeholder="Search games..." />
			</InputGroup>
		</form>
	);
};

export default SearchInput;
