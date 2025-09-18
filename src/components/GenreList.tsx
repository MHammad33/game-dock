import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import type { FC } from "react";

interface GenreListProps {
	onSelectGenre: (genre: Genre) => void;
}

const GenreList: FC<GenreListProps> = ({ onSelectGenre }) => {
	const { data: genres, isLoading, error } = useGenres();

	if (error) return <Text color="red">{error}</Text>;
	if (isLoading) return <Spinner />;

	return (
		<List.Root>
			{genres.map((genre) => (
				<List.Item key={genre.id} paddingY="5px" listStyle="none">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Button
							fontSize="lg"
							variant="ghost"
							onClick={() => onSelectGenre(genre)}
						>
							{genre.name}
						</Button>
					</HStack>
				</List.Item>
			))}
		</List.Root>
	);
};

export default GenreList;
