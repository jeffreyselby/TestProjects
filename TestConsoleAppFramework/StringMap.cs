using System;
using System.Collections.Generic;
using System.Linq;

namespace CustomCollection.Tests
{
    // Do not change the name of this class
    public class StringMap<TValue> : IStringMap<TValue>
        where TValue : class
    {

        private Dictionary<string, TValue> dictionary = new Dictionary<string, TValue>();

        private TValue defaultValue = null;

        /// <summary> Returns number of elements in a map</summary>
        public int Count
        {
            get
            {
                return dictionary.Count;
            }
        }

        /// <summary>
        /// If <c>GetValue</c> method is called but a given key is not in a map then <c>DefaultValue</c> is returned.
        /// </summary>
        // Do not change this property
        public TValue DefaultValue { 
            
            get {

                //if (dictionary.Count == 0)
                //    return null;
                //else
                //    return dictionary.First().Value;

                return defaultValue;
            }
            set { 
            
                defaultValue = value;

                //if (value != null && dictionary.Count > 0)
                //{
                //    string key = dictionary.First().Key;
                //    dictionary[key] = value;
                //}                    
            }
        }

        /// <summary>
        /// Adds a given key and value to a map.
        /// If the given key already exists in a map, then the value associated with this key should be overriden.
        /// </summary>
        /// <returns>true if the value for the key was overriden otherwise false</returns>
        /// <exception cref="System.ArgumentNullException">If the key is null</exception>
        /// <exception cref="System.ArgumentException">If the key is an empty string</exception>
        /// <exception cref="System.ArgumentNullException">If the value is null</exception>
        public bool AddElement(string key, TValue value)
        {
            if (key == null)
                throw new ArgumentNullException("Argument 'key' must not be null.");

            if (key == String.Empty)
                throw new ArgumentException("Argument 'key' must not be empty.");

            if (value == null)
                throw new ArgumentNullException("Argument 'value' must not be null.");

            if (dictionary.ContainsKey(key))
                dictionary[key] = value;
            else
                dictionary.Add(key, value);

            return true;
        }

        /// <summary>
        /// Removes a given key and associated value from a map.
        /// </summary>
        /// <returns>true if the key was in the map and was removed otherwise false</returns>
        /// <exception cref="System.ArgumentNullException">If the key is null</exception>
        /// <exception cref="System.ArgumentException">If the key is an empty string</exception>
        public bool RemoveElement(string key)
        {
            if (key == null)
                throw new ArgumentNullException("Argument 'key' must not be null.");

            if (key == String.Empty)
                throw new ArgumentException("Argument 'key' must not be empty.");

            if (!dictionary.ContainsKey(key))
                return false;
            else
            {
                // Console.WriteLine("Sample debug output");
                dictionary.Remove(key);
                return true;
            }
        }

        /// <summary>
        /// Returns the value associated with a given key.
        /// </summary>
        /// <returns>The value associated with a given key or <c>DefaultValue</c> if the key does not exist in a map</returns>
        /// <exception cref="System.ArgumentNullException">If a key is null</exception>
        /// <exception cref="System.ArgumentException">If a key is an empty string</exception>
        public TValue GetValue(string key)
        {
            if (key == null)
                throw new ArgumentNullException("Argument 'key' must not be null.");

            if (key == String.Empty)
                throw new ArgumentException("Argument 'key' must not be empty.");

            if (dictionary.ContainsKey(key))
                return dictionary[key];
            else
                return this.DefaultValue;
        }
    }
}
