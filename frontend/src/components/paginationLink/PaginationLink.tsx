import { Link, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

type Props = {
    content: string;
    totalPages: string
};

export default function PaginationLink({ content, totalPages }: Props) {

    const query = new URLSearchParams(useLocation().search);
    const page = parseInt(query.get(`${content}Page`) || '1', 10);

    return (
        <Pagination
            page={page}
            count={parseInt(totalPages)}
            size={'small'}
            color="primary"
            hidePrevButton hideNextButton
            renderItem={(item) => (
                <PaginationItem
                    sx={{color: 'white'}}
                    component={Link}
                    to={`?${content}Page=${item.page}`}
                    {...item}
                />
            )}
        />
    );
}