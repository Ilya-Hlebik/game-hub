import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import {Box, Heading, Text} from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <NavBar/>
            <Box padding={5}>
                <Heading>Ooops</Heading>
                <Text>{isRouteErrorResponse(error) ? 'This page does not exist' : 'Unexpected error'}</Text>
            </Box>
        </>
    );
};

export default ErrorPage;
