import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";

const GenreList = ({}) => {
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
						<Text fontSize="lg">{genre.name}</Text>
					</HStack>
				</List.Item>
			))}
		</List.Root>
	);
};

export default GenreList;
