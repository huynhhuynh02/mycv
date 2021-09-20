import React from 'react';
import TitleSection from "../components/TitleSection";

function BlogPage(props) {
    return (
        <TitleSection title="Blog" breadcrumb={['Home','Blog']}/>
    );
}
export default BlogPage;