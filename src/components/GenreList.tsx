import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	Spinner,
	Text,
} from "@chakra-ui/react";
import type { FC } from "react";

interface GenreListProps {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre?: Genre | null;
}

const GenreList: FC<GenreListProps> = ({ onSelectGenre, selectedGenre }) => {
	const { data: genres, isLoading, error } = useGenres();

	if (error) return <Text color="red">{error}</Text>;
	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading
				as="h2"
				fontSize="lg"
				fontWeight="semibold"
				mb={4}
				borderBottom="2px solid"
				borderColor="gray.200"
				pb={2}
			>
				Genres
			</Heading>
			<List.Root gap={2}>
				{genres.map((genre) => (
					<List.Item key={genre.id} paddingY="5px" listStyle="none">
						<HStack>
							<Image
								boxSize="40px"
								borderRadius="md"
								objectFit="cover"
								src={getCroppedImageUrl(genre.image_background)}
								alt={genre.name}
								shadow="sm"
							/>
							<Button
								fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
								whiteSpace="normal"
								textAlign="left"
								justifyContent="flex-start"
								overflow="hidden"
								flex="1"
								variant="plain"
								onClick={() => onSelectGenre(genre)}
							>
								{genre.name}
							</Button>
						</HStack>
					</List.Item>
				))}
			</List.Root>
		</>
	);
};

export default GenreList;
