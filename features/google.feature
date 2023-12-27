Feature: User should search on Google Search Engine

    Scenario: Google Search
        Given User navigates to url
        When  User  enters "iphone" on search
        Then  User is able to see results
