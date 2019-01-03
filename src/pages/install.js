import React from 'react'
import { Button, Card, Form, FormLayout, TextField } from '@shopify/polaris';

import Layout from '../components/layout'
import SEO from '../components/seo'

class InstallPage extends React.Component {
    state = {
        shop: '',
    };

    handleChange = (field) => {
        return (value) => this.setState({ [field]: value });
    }

    onSubmit = (event) => {
        if (this.state.shop.length > 0) {
            event.target.submit();
        } else {
            this.setState({
                hasError: true
            })
        }
    }

    render() {
        const { shop } = this.state;

        return(
            <Layout>
                <SEO title="Install" />
                <Card sectioned>
                    <Form method="GET" onSubmit={this.onSubmit} action="/.netlify/functions/auth">
                        <FormLayout>
                            <TextField
                                id="shop"
                                name="shop"
                                value={shop}
                                onChange={this.handleChange('shop')}
                                label="Shop Domain"
                                type="text"
                                placeholder="example.myshopify.com"
                                error={this.state.hasError &&  'Shop domain is required'}
                                helpText={
                                    <span>Enter your shop domain to log in or install this app.</span>
                                }
                            />
                            <Button primary submit>Submit</Button>
                        </FormLayout>
                    </Form>
                </Card>
            </Layout>
        )
    }
}

export default InstallPage
